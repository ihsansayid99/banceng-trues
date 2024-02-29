import { useEffect, useState } from "react";

interface CellGameProps {
  data?: any;
  onChange?: any
}

export default function CellAction({ data, onChange }: CellGameProps) {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        className="bg-transparent w-8 focus:outline-none"
        value={value}
        type="text"
        onChange={(e: any) => {
          setValue(e.target.value)
          onChange(e.target.value, data)
        }}
        maxLength={3}
      />
    </>
  );
}
