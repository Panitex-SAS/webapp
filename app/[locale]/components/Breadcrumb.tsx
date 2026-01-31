import {Link} from "../../../i18n/routing";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-8">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:font-bold hover:underline transition-all"
                  >
                    {item.label}
                  </Link>
                  <span className="text-gray-400">/</span>
                </>
              ) : (
                <span className="text-red-600 font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
