import Cropper, { ReactCropperElement } from "react-cropper"
import {
  useDropzone,
  type Accept,
  type FileRejection,
  type FileWithPath
} from 'react-dropzone'

import type {
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from 'react-hook-form'

import "cropperjs/dist/cropper.css"

import Image from "next/image"
import {
  CropIcon,
  Undo2Icon,
  Trash2Icon,
  UploadIcon
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog/dialog"
import { Dispatch, HTMLAttributes, SetStateAction, useCallback, useEffect } from "react"
import { FileWithPreview } from "@/types"
import { Typography } from "./ui/typography/typography"

interface FileDialogProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends HTMLAttributes<HTMLDivElement> {
  name: TName,
  setValue: UseFormSetValue<TFieldValues>,
  accept?: Accept,
  maxSize?: number,
  maxFiles?: number,
  files: FileWithPreview[] | null,
  setFiles: Dispatch<SetStateAction<FileWithPreview[] | null>>
  isUploading?: boolean,
  disabled?: boolean,
}

export function FileDialog<TFieldValues extends FieldValues>({
  name,
  setValue,
  accept = {
    "image/*": [],
  },
  maxSize = 1024 * 1024 * 2,
  maxFiles = 1,
  files,
  setFiles,
  isUploading = false,
  disabled = false,
  className,
  ...props
}: FileDialogProps<TFieldValues>) {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
      acceptedFiles.forEach((file) => {
        const fileWithPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
        setFiles((prev) => [...(prev ?? []), fileWithPreview])
      })
      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ errors }) => {
          if (errors[0]?.code === "file-too-large") {
            console.log('File is too large')
            return
          }
          errors[0]?.message && console.log(errors[0].message)
        })
      }
    },
    [maxSize, setFiles]
  )

  // Register files to react-hook-form
  useEffect(() => {
    setValue(name, files as PathValue<TFieldValues, Path<TFieldValues>>)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles,
    multiple: maxFiles > 1,
    disabled
  })

  // Revoke preview url when component unmounts
  useEffect(() => {
    return () => {
      if (!files) {
        return
      }

      files.forEach((file) => URL.revokeObjectURL(file.preview))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" disabled>
          <Typography type="interface-primary">
            Upload images
          </Typography>
          <span className='sr-only'>Upload images</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <Typography>
          Upload your images
        </Typography>
        <div
          {...getRootProps()}
          className={cn(
            "group relative mt-8 grid h-48 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-outline-tertiary px-5 py-2.5 text-center transition hover:bg-surface-hover",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-focus focus-visible:ring-offset-2",
            isDragActive && "border-outline-tertiary-hover",
            disabled && "pointer-events-none opacity-50",
            className
          )}
          {...props}
        >
          <input {...getInputProps()} />
          {isUploading ? (
            <div className="grid w-full gap-1 group place-items-center sm:px-10">
              <UploadIcon
                className="w-9 h-9 animate-pulse text-on-surface-primary"
                aria-hidden="true"
              />
            </div>
          ) : isDragActive ? (
            <div className="grid gap-2 place-items-center text-on-surface-secondary sm:px-5">
              <UploadIcon
                className={cn("h-8 w-8", isDragActive && "animate-bounce")}
                aria-hidden="true"
              />
              <Typography>Drop the file here</Typography>
            </div>
          ) : (
            <div className="grid gap-1 place-items-center sm:px-5">
              <UploadIcon
                className="w-8 h-8 text-on-surface-secondary"
                aria-hidden="true"
              />
              <Typography className="text-on-surface-secondary">
                Drag {`'n'`} drop file here, or click to select file
              </Typography>
              <Typography className="text-on-surface-faint">
                Please upload file with size less than ...
              </Typography>
            </div>
          )}
        </div>
        <Typography className="text-center">
          You can upload up to {maxFiles} {maxFiles === 1 ? "file" : "files"}
        </Typography>
        {files?.length ? (
          <div className="grid gap-5">
            {files?.map((file, i) => (
              <FileCard
                key={i}
                i={i}
                files={files}
                setFiles={setFiles}
                file={file}
              />
            ))}
          </div>
        ) : null}
        {files?.length ? (
          <Button
            type="button"
            variant="outline"
            className="mt-2.5 w-full"
            onClick={() => setFiles(null)}
          >
            <Trash2Icon className="w-4 h-4 mr-2" aria-hidden="true" />
            Remove all
            <span className="sr-only">Remove all</span>
          </Button>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}