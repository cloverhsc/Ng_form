import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html',
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    active = true;

    onSubmit() { this.submitted = true; }

    // To-Do: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout( () => this.active = true, 0);
    }
}
