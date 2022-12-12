export type ProductType = {
    id: string,
    title: string
    price: number,
    image: string
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
    checked: boolean
}