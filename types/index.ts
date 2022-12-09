export type ProductType = {
    id: number,
    title: string
    price: number,
    description: string
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}

export type OrderType = {
    id: string,
    title: string
    price: number,
    quantity: number,
    note: string,
    created_at: string
}

export type ItemType = {
    id: string
    title: string
    category: 'Food' | 'Cleaning' | 'Medicine' | 'Other'
    isChecked: boolean
}