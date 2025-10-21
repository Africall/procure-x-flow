import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Star, Plus } from "lucide-react";

const vendors = [
  {
    id: 1,
    name: "Tech Supplies Ltd",
    email: "contact@techsupplies.com",
    phone: "+254 700 123 456",
    rating: 4.5,
    status: "Active",
    orders: 45,
  },
  {
    id: 2,
    name: "Office Depot Kenya",
    email: "sales@officedepot.ke",
    phone: "+254 700 789 012",
    rating: 4.2,
    status: "Active",
    orders: 32,
  },
  {
    id: 3,
    name: "Print Masters",
    email: "info@printmasters.co.ke",
    phone: "+254 700 345 678",
    rating: 3.8,
    status: "Active",
    orders: 18,
  },
  {
    id: 4,
    name: "Industrial Supplies Co",
    email: "hello@industrial.ke",
    phone: "+254 700 901 234",
    rating: 4.7,
    status: "Pending",
    orders: 0,
  },
];

const Vendors = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold">Vendor Management</h1>
          <p className="text-muted-foreground">
            Manage supplier relationships and performance
          </p>
        </div>
        <Button className="bg-gradient-primary shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="glass-panel hover:shadow-elevated transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base">{vendor.name}</span>
                </div>
                <Badge
                  variant={vendor.status === "Active" ? "default" : "secondary"}
                >
                  {vendor.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-16">Email:</span>
                  <span className="truncate">{vendor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-16">Phone:</span>
                  <span>{vendor.phone}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-medium">{vendor.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {vendor.orders} orders
                </span>
              </div>

              <Button variant="outline" className="w-full mt-2">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
