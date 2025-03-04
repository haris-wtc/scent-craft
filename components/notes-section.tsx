import { NoteOption } from "./note-option";

interface Note {
  name: string;
  percentage: number;
}

interface NotesSectionProps {
  title: string;
  notes: Note[];
}

export function NotesSection({ title, notes }: NotesSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteOption
            key={note.name}
            name={note.name}
            percentage={note.percentage}
          />
        ))}
      </div>
    </div>
  );
}
