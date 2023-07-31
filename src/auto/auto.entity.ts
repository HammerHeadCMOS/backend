import { InfoUserEntity } from 'src/info-user/info-user.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn } from 'typeorm'


@Entity('auto')
export class AutoEntity {

    @PrimaryGeneratedColumn()
    idAuto: number;

    @OneToOne(() => InfoUserEntity)
    @JoinColumn()
    dueñoId:number;

    @Column()
    tipo: string;

    @Column()
    precio: string;

    @Column()
    modelo: string;

    @Column()
    marca: string;

    @Column()
    year: string;

    @Column()
    placa: string;

    @Column()
    cilindraje: string;

    @Column()
    impronta: string;

    @Column()
    transmision: string;

    @Column()
    asientos: string;

    @Column()
    capacidadCarga: string;

    @Column()
    dimensiones: string;

    @Column("text", { array: true })
    imagenes: string[];


}