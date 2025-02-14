import React from "react";
import { Users, Store } from "lucide-react";
type Role = "customer" | "vendor";
interface RoleSelectorProps {
  currentRole: Role;
  onRoleChange: (role: Role) => void;
}
export const RoleSelector = ({
  currentRole,
  onRoleChange
}: RoleSelectorProps) => {
  return <div className="bg-gray-100 p-1 rounded-lg flex gap-1">
      <button onClick={() => onRoleChange("customer")} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${currentRole === "customer" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}>
        <Users className="h-4 w-4" />
        Customer
      </button>
      <button onClick={() => onRoleChange("vendor")} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${currentRole === "vendor" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}>
        <Store className="h-4 w-4" />
        Vendor
      </button>
    </div>;
};
