import { Card } from "@/components/ui/card/card"
import { CardBody } from "@/components/ui/card/card-body"
import { CardHeader } from "@/components/ui/card/card-header"
import { CardFooter } from "@/components/ui/card/card-footer"
import { Button } from "@/components/ui/button/button"
import { Typography } from "@/components/ui/typography/typography"
import Image from "next/image"
import img from '@/public/artur-stanulevich-F_zWvxrQeCk-unsplash.jpg'
export default function Home() {
  return (
    <main>
      <Card href="/" border='lg' className="max-w-sm">
        <CardHeader className="m-0 mb-1">
          <Image
            src={img}
            alt="Test img"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </CardHeader>
        <CardBody className="p-4">
          <Typography tag="h1" size='xxl' weight='bold'>
            Huawei p smart
          </Typography>
          <Typography weight='light'>
            My card body
          </Typography>
        </CardBody>
        <CardFooter className="p-4 pt-0">
          <Button>Buy</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
