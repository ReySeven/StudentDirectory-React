import HeaderContainer from "../components/HeaderContainer";
import FormContainer from "../components/FormContainer";
import ListContainer from "../components/ListContainer";  

const StudentPage = () => {
    const students = [
        {id: 1, name: "John Doe", srcode: "24-12482", program: "Computer Science"},
        {id: 2, name: "Jane Smith", srcode: "24-12483", program: "Information Technology"},
        {id: 3, name: "Michael Johnson", srcode: "24-12484", program: "Software Engineering"},
        {id: 4, name: "Emily Davis", srcode: "24-12485", program: "Data Science"},
        {id: 5, name: "David Wilson", srcode: "24-12486", program: "Cybersecurity"},
    ];

    return(
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students}/>
        </>
    )
}
export default StudentPage;