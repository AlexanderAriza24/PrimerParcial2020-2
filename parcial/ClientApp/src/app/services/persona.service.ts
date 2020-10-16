import { Injectable } from '@angular/core';
import { Persona } from '../Apoyos/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  get(): Persona[]{
    return JSON.parse(localStorage.getItem('datos'));
  }

  post(persona: Persona){

    let personas: Persona[] = [];
    if(this.get() != null){
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }

  verificarIdentificacion(persona: Persona): boolean{

    let personas: Persona[] = [];
    if(this.get() != null){
      personas = this.get();
    }
    for(let i of personas){
      
      if(i.identificacion == persona.identificacion){
        return true;
      }
    }
  }

  validarCampos(persona: Persona): boolean{

    if(persona.identificacion == null || persona.nombres == null || persona.apellidos == null || persona.edad == null || persona.sexo == null || persona.departamento == null || persona.ciudad == null || persona.valorApoyo == null || persona.modalidad == null || persona.fecha == null){
      return true;
    }else {
      return false;
    }
  }

  validarApoyoAsignado(persona: Persona): boolean{

    let valorApoyoAsignado = 0;
    let personas: Persona[] = [];
    if(this.get() != null){
      personas = this.get();
    }
    for(let i of personas){
      
      valorApoyoAsignado += i.valorApoyo;
    }
    if(persona.valorApoyo + valorApoyoAsignado > 600000000)
    return true;
  }

  totalApoyoAsignado(): number {

    let valorApoyoAsignado = 0;
    let personas: Persona[] = [];
    if(this.get() != null){
      personas = this.get();
    }
    for(let i of personas){
      
      valorApoyoAsignado += i.valorApoyo;
    }
    return valorApoyoAsignado;
  }
} 
