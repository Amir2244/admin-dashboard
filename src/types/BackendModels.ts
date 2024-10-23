// types.ts

// Utilities
type GUID = string;
type DateTime = string | Date;
type Decimal = number;

// Model: Advertisements
export interface Advertisement {
    Id: GUID;
    Title: string;
    Description: string;
    ImageUrl: string;
    StartDate: DateTime;
    EndDate: DateTime;
    IsActive: boolean;
}


// Model: AspNetUsers
export interface User {
    Id: GUID;
    UserName?: string;
    NormalizedUserName?: string;
    Email?: string;
    NormalizedEmail?: string;
    EmailConfirmed: boolean;
    PasswordHash?: string;
    SecurityStamp?: string;
    ConcurrencyStamp?: string;
    PhoneNumber?: string;
    PhoneNumberConfirmed: boolean;
    TwoFactorEnabled: boolean;
    LockoutEnd?: DateTime;
    LockoutEnabled: boolean;
    AccessFailedCount: number;
}

// Model: ChatParticipants
export interface ChatParticipant {
    Id: GUID;
    ChatId: GUID;
    UserId: GUID;
    IsAdmin: boolean;
    JoinedAt: DateTime;
    LeftAt?: DateTime;
}

// Model: Chats
export interface Chat {
    Id: GUID;
    IsSupportChat: boolean;
    MissionId?: GUID;
}

// Model: Cleanings
export interface Cleaning {
    Id: GUID;
    IsHaveBalcony: boolean;
    ApartmentType: string;
}

// Model: Companies
export interface Company {
    Id: GUID;
    ActiveonCode?: string;
    NameOfResponsiblePerson: string;
    CompanyAddress: string;
    CompanyType: number;
    LogoPic?: string;
    LicensingPdf?: string;
    InsurancePdf?: string;
    IsAgreeToTerms: boolean;
    IsActiveNow: boolean;
    LastSeen?: DateTime;
    IsApproval: boolean;
    ApprovalDateTime?: DateTime;
    Wallet: Decimal;
    ApiClientId?: GUID;
}

// Model: EmptyCars
export interface EmptyCar {
    Id: GUID;
    NumberOfCarsAvailable: number;
    CarSize: number;
    IsLocal: boolean;
}

// Model: Invoices
export interface Invoice {
    Id: GUID;
    Amount: Decimal;
    CreatedDate: DateTime;
    CompanyId: GUID;
    MissionId: GUID;
}

// Model: Messages
export interface Message {
    Id: GUID;
    Content: string;
    SentAt: DateTime;
    SenderId: GUID;
    ChatId: GUID;
}

// Model: MissionLifeCycles
export interface MissionLifeCycle {
    Id: GUID;
    Status: string;
    StatusChangeDateTime: DateTime;
    MissionId: GUID;
}

// Model: Missions
export interface Mission {
    Id: GUID;
    Type: string;
    MissionResponsible: string;
    MissionResponsibleNumber: string;
    FromAddress: string;
    ToAddress: string;
    City: string;
    Price: Decimal;
    ExecuteDateTime: DateTime;
    State: string;
    Description: string;
    SellerId: GUID;
    BuyerId: GUID;
}

// Model: Notifications
export interface Notification {
    Id: GUID;
    Content: string;
    IsRead: boolean;
    Date: DateTime;
    UserId?: GUID;
    IsGlobal: boolean;
    MissionId?: GUID;
    InvoiceId?: GUID;
}

// Model: Payments
export interface Payment {
    Id: GUID;
    Amount: Decimal;
    PaymentDate: DateTime;
    CompanyId: GUID;
    InvoiceId: GUID;
}

// Model: Transfers
export interface Transfer {
    Id: GUID;
    ApartmentType: string;
    ApartmentArea: string;
    IsElevatorAvailable: boolean;
    IsWrapping: boolean;
    FromAddressFloor: string;
    ToAddressFloor: string;
}

// Model: Warehousings
export interface Warehousing {
    Id: GUID;
    StorageDuration: number;
    AreaInCubicMeter: Decimal;
}
