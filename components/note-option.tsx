interface NoteOptionProps {
  name: string;
  percentage: number;
}

export function NoteOption({ name, percentage }: NoteOptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{percentage}%</div>
    </div>
  );
}
