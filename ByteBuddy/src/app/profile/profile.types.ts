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

// Response from the new friend request status API endpoint
export interface FriendRequestStatusResponse {
    requesterId?: string
    requesterName?: string
    addresseeId?: string
    addresseeName?: string
    status: 0 | 1 | 2 | 3 // 0=Pending, 1=Accepted, 2=Declined, 3=Blocked
    createdAt?: string
}

// Enum for friendship status values from backend
export enum FriendshipStatusEnum {
    Pending = 0,
    Accepted = 1,
    Declined = 2,
    Blocked = 3
}

export type FriendshipStatus = 'none' | 'friends' | 'incoming' | 'outgoing'
