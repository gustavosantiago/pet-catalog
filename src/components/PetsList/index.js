import { Container, Row }  from "react-bootstrap";
import PetCard from "../PetCard";

function PetsList() {
  const pets = [
    {
      name: 'Juca',
      raca: 'Dachshund',
      description: 'The cool Dachshund',
      url: 'https://guiaanimal.net/uploads/content/image/68860/Design_sem_nome__30_.png'
    },
    {
      name: 'Zacarias',
      raca: 'Dachshund',
      description: 'The cool Dachshund',
      url: 'https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png'
    },
    {
      name: 'Penelope',
      raca: 'Dachshund',
      description: 'The cool Dachshund',
      url: 'https://omelhoramigodohomem.com.br/wp-content/uploads/2020/02/Dachshund-1-810x539.jpg'
    },
    {
      name: 'Clovis',
      raca: 'Hedgehog',
      description: 'The cool Hedgehog',
      url: 'https://media.gazetadopovo.com.br/viver-bem/2017/08/hedgehog-ourio-1920-c337a970.jpg'
    },
    {
      name: 'Sonio',
      raca: 'Hedgehog',
      description: 'The cool Hedgehog',
      url: 'https://nypost.com/wp-content/uploads/sites/2/2021/05/hedgehog.jpg?quality=80&strip=all'
    }
  ]

  const renderPetCards = pets.map((pet, index) => 
    <PetCard
      key={index} 
      petAttributes={pet}
    />
  );

  return(
    <Container>
      <Row>
        { renderPetCards }
      </Row>
    </Container>
  );
}

export default PetsList;