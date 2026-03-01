export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center px-4 py-16 text-center text-gray-600 dark:text-gray-400 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/footer_bg.png')] bg-cover bg-center bg-no-repeat opacity-90 dark:opacity-70" />
      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-50/90 to-transparent dark:from-darkBg/90" />

      {/* Content Layer */}
      <section className="relative z-10 max-w-[28rem] rounded-2xl bg-white/60 p-6 backdrop-blur-md dark:bg-black/60 shadow-lg">
        <small className="mb-2 block text-xs font-medium">
          &copy; Priyansh Khajuria | 2026
        </small>
        <p className="text-sm">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            How about we break the ice and start a conversation?
          </span>{" "}
          It&apos;s like adding sprinkles to the cake of life - makes everything
          more fun!
        </p>
      </section>
    </footer>
  );
}
