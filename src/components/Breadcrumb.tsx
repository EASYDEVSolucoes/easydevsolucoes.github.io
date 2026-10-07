import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import type { Crumb } from "@/lib/schema";

/** Trilha de navegação visível. Os dados estruturados saem de breadcrumbNode(). */
export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Você está em" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-700">
        <li>
          <Link href="/" className="rounded underline-offset-4 hover:underline">
            Início
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              <ChevronRightIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
              {last ? (
                <span aria-current="page" className="font-medium text-gray-900">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="rounded underline-offset-4 hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
