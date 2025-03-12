import PromotedCategoryCard from './PromotedCategoryCard'

const PromotedCompanies = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-20 border-b-4 '>
      <div className='mx-[24px]'>
        <div >
            <h1 className='text-4xl font-bold pb-6 text-center'>Promoted Companies</h1>
            <div className='grid grid-cols-4 gap-4'>
                <PromotedCategoryCard color={"#9bf6ff"} />                         
                <PromotedCategoryCard color={"#e3cbfe"} />                         
                <PromotedCategoryCard color={"#caffbf"} />                         
                <PromotedCategoryCard color={"#fdffb6"} />                         
            </div>
        </div>
      </div>
    </div>
  )
}

export default PromotedCompanies
