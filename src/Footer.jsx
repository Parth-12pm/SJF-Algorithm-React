import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

function Footer() {
  return (
    <div className="px-2 py-4">
    <Card className="bg-white p-2  rounded-xl shadow-lg"> 
<CardHeader>
  <CardTitle className="font-semibold ">Team Members : </CardTitle>
</CardHeader>
<CardContent>
<div className="col-2 flex flex-wrap gap-2 ">
      <div>
        <Card className="bg-white p-2 text-lg rounded-lg shadow-sm"> 
          <CardHeader>
            <CardTitle>Name :</CardTitle>
            <CardDescription>Parth Sanjay Mahadik</CardDescription>
            <CardTitle>Class :</CardTitle>
            <CardDescription>IF5IA</CardDescription>
            <CardTitle>Roll No :</CardTitle>
            <CardDescription>22202A0018</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
      <Card className="bg-white p-2 text-lg rounded-lg shadow-sm"> 
          <CardHeader>
            <CardTitle>Name :</CardTitle>
            <CardDescription>Atharva Santosh Shirishkar</CardDescription>
            <CardTitle>Class :</CardTitle>
            <CardDescription>IF5IA</CardDescription>
            <CardTitle>Roll No :</CardTitle>
            <CardDescription>22202A0027</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
</CardContent>
</Card>

    </div>
  )
}

export default Footer