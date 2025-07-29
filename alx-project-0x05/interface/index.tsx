
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export interface ButtonProps {
  action?: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}