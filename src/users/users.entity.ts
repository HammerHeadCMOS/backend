import { InfoUserEntity } from 'src/info-user/info-user.entity';
import { RolEntity } from 'src/rol/rol.entity';
import { PrimaryGeneratedColumn, Entity, Column,OneToOne,JoinColumn } from 'typeorm'

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(() => InfoUserEntity)
    @JoinColumn()
    profile:InfoUserEntity;

    @OneToOne(() => RolEntity)
    @JoinColumn()
    rol:RolEntity;
}