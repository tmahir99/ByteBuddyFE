export interface ApplicationUserDto {
    id?: string
    userName?: string
    normalizedUserName?: string
    email?: string
    firstName?: string
    lastName?: string
    dateOfBirth?: string
    gender?: string
    birthPlace?: string
    address?: string
    roles?: string[]
    fullName?: string
    phoneNumber?: string | null
    createdAt?: string
    lastLoginAt?: string | null
}

export interface PageDto {
    id: number
    title: string
    description?: string | null
    imageUrl?: string | null // Added for file/image support
    createdAt: Date
    createdById?: string | null
    createdBy?: ApplicationUserDto
    likesCount: number
    isLikedByCurrentUser: boolean
}

export interface FriendshipDto {
    requesterId?: string | null
    requesterName?: string | null
    addresseeId?: string | null
    addresseeName?: string | null
    status?: number
    createdAt?: string
}

export type FriendshipStatus = 'none' | 'friends' | 'incoming' | 'outgoing'
