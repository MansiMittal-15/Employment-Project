import CategoryCard from './CategoryCard'
import BackCategoryCard from './BackCategoryCard'

const Categories = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-20 border-b-4 '>
      <div className='mx-[24px]'>
        <div >
            <h1 className='text-4xl font-bold pb-6 text-center'>Most popular categories</h1>
            <div className='grid grid-cols-4 gap-4 '>
                <CategoryCard />                
                <CategoryCard />                
                <CategoryCard />                
                <CategoryCard />                
                <CategoryCard />                
                <CategoryCard />                
                <CategoryCard />                
                <CategoryCard />   
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
