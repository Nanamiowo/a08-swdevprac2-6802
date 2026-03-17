import Link from "next/link"

export default function TopMenuItem({ title, pageRef }: any) {
  return (
    <Link href={pageRef}>
      <div className="px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
        {title}
      </div>
    </Link>
  )
}