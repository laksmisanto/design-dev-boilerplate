// Component Library Boilerplate
// All components use your global CSS variables + Tailwind
// You can split into separate files later.

import React from "react";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------
   BUTTON COMPONENT
---------------------------------------------------- */
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";

  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
    secondary: "bg-[var(--secondary)] text-white hover:bg-[var(--secondary-dark)]",
    muted: "bg-[var(--btn-muted-bg)] text-[var(--btn-muted-text)] hover:bg-[var(--btn-muted-hover)]",
    outline: "border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface-alt)]",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

/* ----------------------------------------------------
   CARD COMPONENT
---------------------------------------------------- */
export const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-sm", 
        className
      )}
    >
      {children}
    </div>
  );
};

/* ----------------------------------------------------
   INPUT FIELD COMPONENT
---------------------------------------------------- */
export const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 rounded-md bg-[var(--input-bg)] border border-[var(--input-border)]",
        "text-[var(--text-primary)] placeholder-[var(--input-placeholder)] focus:border-[var(--input-focus)] focus:ring-0",
        className
      )}
      {...props}
    />
  );
};

/* ----------------------------------------------------
   CARD HEADER + TITLE
---------------------------------------------------- */
export const CardHeader = ({ title, children }) => (
  <div className="mb-3 border-b border-[var(--divider)] pb-2">
    {title && <h2 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h2>}
    {children}
  </div>
);

/* ----------------------------------------------------
   BADGE COMPONENT
---------------------------------------------------- */
export const Badge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-[var(--primary)] text-white",
    secondary: "bg-[var(--secondary)] text-white",
    success: "bg-[var(--success)] text-white",
    warning: "bg-[var(--warning)] text-black",
    error: "bg-[var(--error)] text-white",
  };

  return (
    <span className={cn("px-2 py-0.5 rounded-md text-sm", variants[variant])}>
      {children}
    </span>
  );
};

/* ----------------------------------------------------
   TABLE COMPONENT
---------------------------------------------------- */
export const Table = ({ columns = [], data = [] }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--t-border)]">
      <table className="min-w-full text-[var(--t-text)]">
        <thead className="bg-[var(--t-header-bg)]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left font-medium text-[var(--t-row-header-text)]"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-[var(--t-row-hover)] transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 border-t border-[var(--t-border)]">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ----------------------------------------------------
   LOADING SPINNER
---------------------------------------------------- */
export const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent"></div>
  </div>
);

/* ----------------------------------------------------
   SECTION WRAPPER
---------------------------------------------------- */
export const Section = ({ title, children }) => (
  <section className="mb-10">
    <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{title}</h1>
    {children}
  </section>
);

/* ----------------------------------------------------
   EXPORT ALL COMPONENTS
---------------------------------------------------- */
export default {
  Button,
  Card,
  CardHeader,
  Input,
  Badge,
  Table,
  Spinner,
  Section,
};

/* ----------------------------------------------------
   NAVBAR COMPONENT
---------------------------------------------------- */
export const Navbar = ({ brand, links = [] }) => (
  <nav className="w-full bg-[var(--surface)] border-b border-[var(--border)] px-6 py-3 flex items-center justify-between">
    <div className="text-xl font-semibold text-[var(--text-primary)]">{brand}</div>
    <div className="flex space-x-6">
      {links.map((l) => (
        <a key={l.label} href={l.href} className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">{l.label}</a>
      ))}
    </div>
  </nav>
);

/* ----------------------------------------------------
   SIDEBAR COMPONENT
---------------------------------------------------- */
export const Sidebar = ({ items = [] }) => (
  <aside className="w-64 h-screen bg-[var(--surface)] border-r border-[var(--border)] p-4">
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="block px-3 py-2 rounded-md text-[var(--text-secondary)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-primary)]"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

/* ----------------------------------------------------
   MODAL COMPONENT
---------------------------------------------------- */
export const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[var(--z-modal)]">
      <div className="bg-[var(--surface)] p-6 rounded-lg shadow-xl w-full max-w-lg">
        {children}
        <button className="mt-4 px-4 py-2 bg-[var(--error)] text-white rounded-md" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   ALERT COMPONENT
---------------------------------------------------- */
export const Alert = ({ type = "info", message }) => {
  const styles = {
    info: "bg-[var(--info-bg)] text-[var(--info)]",
    success: "bg-[var(--success-bg)] text-[var(--success)]",
    warning: "bg-[var(--warning-bg)] text-[var(--warning)]",
    error: "bg-[var(--error-bg)] text-[var(--error)]",
  };
  return <div className={`p-3 rounded-md ${styles[type]}`}>{message}</div>;
};

/* ----------------------------------------------------
   DROPDOWN COMPONENT
---------------------------------------------------- */
export const Dropdown = ({ label, items = [] }) => (
  <details className="relative inline-block">
    <summary className="cursor-pointer px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-md">{label}</summary>
    <ul className="absolute mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-md">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="block px-4 py-2 hover:bg-[var(--surface-alt)]">{item.label}</a>
        </li>
      ))}
    </ul>
  </details>
);

/* ----------------------------------------------------
   PAGINATION COMPONENT
---------------------------------------------------- */
export const Pagination = ({ page, totalPages, onChange }) => (
  <div className="flex space-x-2">
    <Button variant="muted" onClick={() => onChange(page - 1)} disabled={page === 1}>Prev</Button>
    <span className="px-3 py-2">{page} / {totalPages}</span>
    <Button variant="muted" onClick={() => onChange(page + 1)} disabled={page === totalPages}>Next</Button>
  </div>
);

/* ----------------------------------------------------
   TAB COMPONENT
---------------------------------------------------- */
export const Tabs = ({ tabs = [], active, onChange }) => (
  <div className="flex border-b border-[var(--border)]">
    {tabs.map((t) => (
      <button
        key={t}
        className={`px-4 py-2 ${active === t ? "border-b-2 border-[var(--primary)] text-[var(--primary)]" : "text-[var(--text-secondary)]"}`}
        onClick={() => onChange(t)}
      >
        {t}
      </button>
    ))}
  </div>
);

/* ----------------------------------------------------
   AVATAR COMPONENT
---------------------------------------------------- */
export const Avatar = ({ src, size = 40 }) => (
  <img
    src={src}
    className="rounded-full object-cover"
    style={{ width: size, height: size }}
  />
);

/* ----------------------------------------------------
   TOAST (SIMPLE VERSION)
---------------------------------------------------- */
export const Toast = ({ open, message }) => (
  open ? (
    <div className="fixed bottom-6 right-6 bg-[var(--surface)] border border-[var(--border)] shadow-lg px-4 py-2 rounded-md">
      {message}
    </div>
  ) : null
);

/* ----------------------------------------------------
   EXPORT EXTENDED COMPONENTS
---------------------------------------------------- */
export const UI = {
  Navbar,
  Sidebar,
  Modal,
  Alert,
  Dropdown,
  Pagination,
  Tabs,
  Avatar,
  Toast,
};
