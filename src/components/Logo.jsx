import Image from 'next/image'

export function Logo(props) {
  return (
    <div className="flex flex-col items-end">
      <Image
        src="/image-dm/SkillsMarathon.png"
        alt="Skills Marathon logo"
        width={100}
        height={100}
        className="h-auto w-40"
      />
    </div>
  )
}
