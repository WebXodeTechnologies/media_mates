export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Media Mates. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">LI</a>
        </div>
      </div>
    </footer>
  );
}
