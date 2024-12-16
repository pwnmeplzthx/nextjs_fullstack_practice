import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
    return (<>
        <Container className="relative mt-10">
            <Title text='All resources' size='lg' className='font-extrabold'/>
        </Container>
        <TopBar />
        <Container className='pb-14 mt-10'>
            <div className='flex gap-[60px]'>
                <div className="w-[250px]">
                    <Filters />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col gap-16">
                        Resources list
                    </div>
                </div>
            </div>
        </Container>
    </>)
}
