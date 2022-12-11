import Wrapper from "../../layout/wrapper"

export default function TargetRenstra(){
    return (
        <>
            <div>Target Renstra</div>
        </>
    )
}

TargetRenstra.getLayout = function getLayout(page) {
    return (
        <Wrapper>
            {page}
        </Wrapper>
    )
}