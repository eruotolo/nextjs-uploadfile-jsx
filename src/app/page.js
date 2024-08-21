import FormulaUpload from '@/app/components/form/form';

export default function Home() {
    return (
        <>
            <section>
                <div className="container mx-auto pt-[80px]">
                    <h1 className="mb-[30px] text-[20px] font-medium">Formulario Upload File</h1>
                    <FormulaUpload />
                </div>
            </section>
        </>
    );
}
