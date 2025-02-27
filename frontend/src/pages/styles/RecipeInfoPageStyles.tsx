import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Lora, serif'; // Use Lora for consistency

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const MainContent = styled.div`
  flex: 3;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const Sidebar = styled.div`
  flex: 1;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const RecipeName = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const CountryLink = styled.p`
  text-align: center;
  color: #007bff;
  cursor: pointer;
  font-family: 'Lora, serif'; // Use Lora for consistency

  &:hover {
    text-decoration: underline;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const Instructions = styled.p`
  line-height: 1.6;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const IngredientList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const IngredientItem = styled.li`
  color: #007bff;
  cursor: pointer;
  margin: 5px 0;
  font-family: 'Lora, serif'; // Use Lora for consistency

  &:hover {
    text-decoration: underline;
  }
`

export const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: 'Lora, serif'; // Use Lora for consistency
`

export const SidebarItem = styled.li`
  color: #007bff;
  cursor: pointer;
  margin: 5px 0;
  font-family: 'Lora, serif'; // Use Lora for consistency

  &:hover {
    text-decoration: underline;
  }
`
