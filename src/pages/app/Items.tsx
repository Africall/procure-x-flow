import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, Plus } from "lucide-react";

const items = [
  {
    id: 1,
    sku: "TECH-001",
    name: "Dell Latitude 7420 Laptop",
    unit: "pcs",
    taxRate: 16,
    category: "IT Equipment",
    stock: 12,
  },
  {
    id: 2,
    sku: "OFF-045",
    name: "A4 Printer Paper (Ream)",
    unit: "ream",
    taxRate: 16,
    category: "Office Supplies",
    stock: 250,
  },
  {
    id: 3,
    sku: "FURN-012",
    name: "Executive Office Chair",
    unit: "pcs",
    taxRate: 16,
    category: "Furniture",
    stock: 8,
  },
  {
    id: 4,
    sku: "CLEAN-008",
    name: "Disinfectant Spray (500ml)",
    unit: "btl",
    taxRate: 16,
    category: "Cleaning",
    stock: 45,
  },
];

const Items = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold">Product Catalog</h1>
          <p className="text-muted-foreground">
            Manage items, SKUs, and inventory
          </p>
        </div>
        <Button className="bg-gradient-primary shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Item Catalog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Tax Rate</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono">{item.sku}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{item.taxRate}%</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={item.stock > 20 ? "default" : "secondary"}
                    >
                      {item.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Items;
