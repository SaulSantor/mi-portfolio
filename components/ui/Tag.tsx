import { surface } from "@/lib/styles/theme";

type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${surface.tag}`}
    >
      {label}
    </span>
  );
}
