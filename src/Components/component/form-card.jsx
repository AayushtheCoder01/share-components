/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/uOo0tRTMhQf
 */
import { CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { useNavigate } from "react-router-dom"

export default function FormCard({handleSubmit, setCode, setComponent, setDescription}) {
  const navigate = useNavigate()
  return (
    (
    <Card className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="grid gap-4 p-6">
        <CardHeader className="p-0">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-bold">Add Snippet</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enter the details of your snippet.</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-1.5">
            <Label htmlFor="title">component</Label>
            <Input required onChange={(e) => {
                setComponent(e.target.value)
              }} id="title" placeholder="Header, Footer, Navbar" type="text" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="code" >Code</Label>
            <Textarea
            required
              onChange={(e) => {
                setCode(e.target.value)
              }}
              className="resize-y h-36 min-h-[150px]"
              id="code"
              placeholder="Enter your code here." />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
            required
            onChange={(e) => {
              setDescription(e.target.value)
            }}
              className="resize-y h-36 min-h-[150px]"
              id="description"
              placeholder="Enter a description." />
          </div>
        </CardContent>
        <CardFooter>
          <Button className='mr-5 text-black bg-gray-100' onClick={()=>navigate('/home')}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>)
  );
}
