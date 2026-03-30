import { data } from "../data";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p className="mb-1">{data.name}</p>
      <p>
        <a
          href={`mailto:${data.email}`}
          className="hover:text-slate-300 transition-colors"
        >
          {data.email}
        </a>{" "}
        · {data.phone}
      </p>
    </footer>
  );
}
