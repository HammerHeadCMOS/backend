import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'

@Entity('info-user')
export class InfoUserEntity {

    @PrimaryGeneratedColumn()
    idInfoUsuario: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

}