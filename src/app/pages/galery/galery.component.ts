import { Component } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { CommonModule } from '@angular/common';
import { Item } from '../../interfaces/Item';

@Component({
  selector: 'app-galery',
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {
  items: Item[] = [];
  selectedIndex: number = -1;  // -1 significa ninguno seleccionado

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getGalaxyImages().subscribe({
      next: (response) => {
        this.items = response.collection?.items || [];
      },
      error: (err) => {
        console.error('Error al obtener imágenes:', err);
      }
    });
  }

  toggleImages(index: number): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;  // ocultar si se presiona el mismo botón
    } else {
      this.selectedIndex = index;  // mostrar imágenes del nuevo índice
    }
  }
}
