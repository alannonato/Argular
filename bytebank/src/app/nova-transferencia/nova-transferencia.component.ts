import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: Number;
  destino: Number;

  transferir(){
    console.log('Solicitada nova transferencia')
    let valorEmitir = {valor: this.valor,  destino: this.destino}
    this.aoTransferir.emit(valorEmitir)

  }
}


