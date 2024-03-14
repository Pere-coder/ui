import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function CardBox() {
  return (
    <Card className="mt-20">
      <CardHeader>
        <CardTitle>BUY STUFF</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
        <Input  className="mt-5"/>
        <Button variant="outline" className="mt-5">Button</Button>

      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
