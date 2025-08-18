// SimpleUI.jsx
export function Button({ children, onClick, variant = "default" }) {
  const base = "px-3 py-2 rounded-lg font-medium text-sm transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export function Card({ children }) {
  return <div className="shadow-lg rounded-xl overflow-hidden">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="px-4 py-3 border-b border-gray-200">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="px-4 py-3 border-t border-gray-200">{children}</div>;
}
