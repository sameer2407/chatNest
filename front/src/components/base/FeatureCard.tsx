import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

 export default function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) { 

    return (
      <Card className="p-6 bg-card">
        <CardHeader className="space-y-1">
        <div className="text-3xl mb-4">{icon}</div>
          <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
      </Card>
    )
   
 }