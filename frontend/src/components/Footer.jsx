
const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col -gap-14">
        
        <div className="border bg-gray-20">

        </div>
        <p className="text-center regular-14 text-gray-30">2024 Wellness Retrest | all rights reverved.</p>
      </div>
    </footer>
  )
}
const FooterColunm =({title,children})=>{
  return(
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}
export default Footer