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
import { CheckSquare, Check, X } from "lucide-react";

const approvals = [
  {
    id: "APP-001",
    docType: "PO",
    docId: "PO-1237",
    requestedBy: "Jane Smith",
    amount: 85000,
    currency: "KES",
    level: 2,
    status: "Pending",
    submittedAt: "2025-01-23 09:15",
  },
  {
    id: "APP-002",
    docType: "Invoice",
    docId: "INV-003",
    requestedBy: "John Doe",
    amount: 45000,
    currency: "KES",
    level: 1,
    status: "Pending",
    submittedAt: "2025-01-23 14:30",
  },
];

const Approvals = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold">Approval Queue</h1>
        <p className="text-muted-foreground">
          Review and approve pending procurement requests
        </p>
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5" />
            My Queue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Document Type</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvals.map((approval) => (
                <TableRow key={approval.id}>
                  <TableCell className="font-mono">{approval.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{approval.docType}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{approval.docId}</TableCell>
                  <TableCell>{approval.requestedBy}</TableCell>
                  <TableCell>
                    {approval.currency} {approval.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">L{approval.level}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{approval.submittedAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default" className="h-8">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" className="h-8">
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
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

export default Approvals;
