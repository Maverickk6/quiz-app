export default function Footer() {
  return (
    <footer className="text-black flex justify-between mt-14 place-items-center px-8">
      <a href="https://github.com/dev-47">
        <div className="logo m-10">
          <spsan className="text-[#e01936] text-2xl">DEV &nbsp;</spsan>
          <span className="text-[#026294] text-2xl">47</span>
        </div>
      </a>

      <h3 className="text-[#026294] text-sm p-5"> Copyright &copy; {new Date().getFullYear()} </h3>
    </footer>
  );
}
