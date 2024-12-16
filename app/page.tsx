import { Container, Filters, ResourcesList, Title, TopBar } from "@/components/shared";

export default function Home() {
    return (<>
        <Container className="relative mt-10">
            <Title text='All resources' size='lg' className='font-extrabold'/>
        </Container>
        <TopBar />
        <Container className='pb-14 mt-10'>
            <div className='flex gap-[80px]'>
                <div className="w-[250px]">
                    <Filters />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col gap-16">
                        <ResourcesList
                            title="Category 1"
                            resourceTypeId={1}
                            items={[
                                {
                                    id: 1,
                                    name: 'Resource 1',
                                    description: 'Resource description',
                                    price: 111,
                                    imageUrl: "",
                                }, {
                                    id: 2,
                                    name: 'Resource 2',
                                    description: 'Resource description',
                                    price: 222,
                                    imageUrl: "",
                                }, {
                                    id: 3,
                                    name: 'Resource 3',
                                    description: 'Resource description',
                                    price: 333,
                                    imageUrl: "",
                                }, {
                                    id: 4,
                                    name: 'Resource 4',
                                    description: 'Resource description',
                                    price: 444,
                                    imageUrl: "",
                                }, {
                                    id: 5,
                                    name: 'Resource 5',
                                    description: 'Resource description',
                                    price: 555,
                                    imageUrl: "",
                                }, {
                                    id: 6,
                                    name: 'Resource 6',
                                    description: 'Resource description',
                                    price: 666,
                                    imageUrl: "",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </Container>
    </>)
}
