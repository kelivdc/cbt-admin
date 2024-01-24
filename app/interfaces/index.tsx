export interface IPeserta {
    id: number;
    title: string;
    username: string;
    password: string;
    alamat: string;
    kelompok: { id: number };
    status: boolean;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    role: {id: number };
    Topik: { id: number };
}


export interface IKelompok {
    id: number;
    title: string;
}

export interface ITopik {
    id: number;
    title: string;
    mulai: DateTime;
    akhir: DateTime;
    show_result: boolean;
}

export interface UploadFile {
    // name: string;
    // url: string;
    // size: number;
    // uid: string;
    id: number;
}

export interface ISoal {
    id: number;
    title: string;
    body: string;
    bobot: number;
    tipe: string;
    topik: { id: number };
    image: {
        id: number;
        name: string;
        alternativeText: any;
        caption: any;
        width: number;
        height: number;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: any;
        provider: string;
        provider_metadata: any;
        createdAt: string;
        updatedAt: string;
    }[];
}

export interface IUserJawaban {
    id: number;
    user: { id: number };
    Soal: { id: number };
    skor: number;
    createdat: date;

}