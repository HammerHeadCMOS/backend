import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'

@Entity('rol')
export class RolEntity {

    @PrimaryGeneratedColumn()
    idRol: number;

    @Column()
    nombre: string;

    @Column("text", { array: true })
    permisos: string[];

}