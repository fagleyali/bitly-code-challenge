import  Cats from '../js/Cats'
import { render, screen} from '@testing-library/react'
import getCats from '../../../../__mocks__/mockCatApi'



describe(()=>{
    beforeEach(()=>{
        jest.mock(getCats)
    })
    test('Cats',async()=>{
        render(<Cats />);
        const CatDivElement = await screen.findByTestId('cat-breed-0')
        expect(CatDivElement).toBeInTheDocument()
    })
})
