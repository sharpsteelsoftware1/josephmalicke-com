"use client";
import "client-only"

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
