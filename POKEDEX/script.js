class Pokedex {
    constructor() {
        this.pokemons = [];
        this.filteredPokemons = [];
        this.currentPage = 1;
        this.pokemonsPerPage = 20;
        this.currentFilters = {
            search: '',
            type: ''
        };

        this.initializeElements();
        this.initializeEventListeners();
        this.loadPokemons();
    }

    initializeElements() {
        this.container = document.getElementById('pokemon-container');
        this.searchInput = document.getElementById('search');
        this.typeFilter = document.getElementById('typeFilter');
        this.resetButton = document.getElementById('resetFilters');
        this.prevButton = document.getElementById('prevPage');
        this.nextButton = document.getElementById('nextPage');
        this.pageInfo = document.getElementById('pageInfo');
        this.modal = document.getElementById('pokemonModal');
        this.modalBody = document.getElementById('modal-body');
        this.closeModal = document.querySelector('.close');
    }

    initializeEventListeners() {
        this.searchInput.addEventListener('input', () => this.applyFilters());
        this.typeFilter.addEventListener('change', () => this.applyFilters());
        this.resetButton.addEventListener('click', () => this.resetFilters());
        this.prevButton.addEventListener('click', () => this.previousPage());
        this.nextButton.addEventListener('click', () => this.nextPage());
        this.closeModal.addEventListener('click', () => this.closeModalWindow());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModalWindow();
        });
    }

    async loadPokemons() {
        this.showLoading();
        try {
            // Cargar primeros 151 Pokémon (primera generación)
            for (let i = 1; i <= 151; i++) {
                await this.fetchPokemon(i);
            }
            this.applyFilters();
        } catch (error) {
            console.error('Error cargando Pokémon:', error);
        }
    }

    async fetchPokemon(id) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.ok) return;
            
            const data = await response.json();
            
            const pokemon = {
                id: data.id,
                name: data.name,
                img: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
                types: data.types.map(t => t.type.name),
                height: data.height / 10,
                weight: data.weight / 10,
                stats: data.stats.map(stat => ({
                    name: stat.stat.name,
                    value: stat.base_stat
                })),
                abilities: data.abilities.map(ability => ability.ability.name)
            };
            
            this.pokemons.push(pokemon);
        } catch (error) {
            console.error(`Error cargando Pokémon ${id}:`, error);
        }
    }

    applyFilters() {
        const searchText = this.searchInput.value.toLowerCase();
        const selectedType = this.typeFilter.value;

        this.currentFilters.search = searchText;
        this.currentFilters.type = selectedType;

        this.filteredPokemons = this.pokemons.filter(pokemon => {
            const matchesSearch = pokemon.name.toLowerCase().includes(searchText) || 
                                pokemon.id.toString().includes(searchText);
            const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
            
            return matchesSearch && matchesType;
        });

        this.currentPage = 1;
        this.renderPokemons();
    }

    resetFilters() {
        this.searchInput.value = '';
        this.typeFilter.value = '';
        this.applyFilters();
    }

    renderPokemons() {
        this.container.innerHTML = '';

        if (this.filteredPokemons.length === 0) {
            this.container.innerHTML = '<div class="loading">No se encontraron Pokémon</div>';
            return;
        }

        const startIndex = (this.currentPage - 1) * this.pokemonsPerPage;
        const endIndex = startIndex + this.pokemonsPerPage;
        const pokemonsToShow = this.filteredPokemons.slice(startIndex, endIndex);

        pokemonsToShow.forEach(pokemon => {
            const card = this.createPokemonCard(pokemon);
            this.container.appendChild(card);
        });

        this.updatePagination();
    }

    createPokemonCard(pokemon) {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.setAttribute('data-types', pokemon.types.join(' '));
        
        // Aplicar colores de tipo
        if (pokemon.types.length > 1) {
            card.style.setProperty('--type-color-1', this.getTypeColor(pokemon.types[0]));
            card.style.setProperty('--type-color-2', this.getTypeColor(pokemon.types[1]));
        } else {
            card.style.setProperty('--type-color-1', this.getTypeColor(pokemon.types[0]));
            card.style.setProperty('--type-color-2', this.getTypeColor(pokemon.types[0]));
        }

        card.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <div class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</div>
            <div class="pokemon-types">
                ${pokemon.types.map(type => 
                    `<span class="type-badge type-${type}">${type}</span>`
                ).join('')}
            </div>
        `;

        card.addEventListener('click', () => this.showPokemonDetails(pokemon));
        return card;
    }

    showPokemonDetails(pokemon) {
        this.modalBody.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}" class="modal-pokemon-img">
            <h2>${pokemon.name} <span>#${pokemon.id.toString().padStart(3, '0')}</span></h2>
            
            <div class="pokemon-types" style="justify-content: center; margin: 15px 0;">
                ${pokemon.types.map(type => 
                    `<span class="type-badge type-${type}">${type}</span>`
                ).join('')}
            </div>

            <div class="modal-stats">
                <div class="stat-item">
                    <strong>Altura</strong><br>${pokemon.height}m
                </div>
                <div class="stat-item">
                    <strong>Peso</strong><br>${pokemon.weight}kg
                </div>
                <div class="stat-item">
                    <strong>HP</strong><br>${pokemon.stats.find(s => s.name === 'hp').value}
                </div>
                <div class="stat-item">
                    <strong>Ataque</strong><br>${pokemon.stats.find(s => s.name === 'attack').value}
                </div>
                <div class="stat-item">
                    <strong>Defensa</strong><br>${pokemon.stats.find(s => s.name === 'defense').value}
                </div>
                <div class="stat-item">
                    <strong>Velocidad</strong><br>${pokemon.stats.find(s => s.name === 'speed').value}
                </div>
            </div>

            <div style="margin-top: 20px;">
                <strong>Habilidades:</strong><br>
                ${pokemon.abilities.map(ability => ability.replace('-', ' ')).join(', ')}
            </div>
        `;

        this.modal.style.display = 'block';
    }

    closeModalWindow() {
        this.modal.style.display = 'none';
    }

    getTypeColor(type) {
        const colors = {
            normal: '#A8A878',
            fire: '#F08030',
            water: '#6890F0',
            electric: '#F8D030',
            grass: '#78C850',
            ice: '#98D8D8',
            fighting: '#C03028',
            poison: '#A040A0',
            ground: '#E0C068',
            flying: '#A890F0',
            psychic: '#F85888',
            bug: '#A8B820',
            rock: '#B8A038',
            ghost: '#705898',
            dragon: '#7038F8',
            dark: '#705848',
            steel: '#B8B8D0',
            fairy: '#EE99AC'
        };
        return colors[type] || '#666';
    }

    updatePagination() {
        const totalPages = Math.ceil(this.filteredPokemons.length / this.pokemonsPerPage);
        
        this.pageInfo.textContent = `Página ${this.currentPage} de ${totalPages}`;
        this.prevButton.disabled = this.currentPage === 1;
        this.nextButton.disabled = this.currentPage === totalPages || totalPages === 0;
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredPokemons.length / this.pokemonsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.renderPokemons();
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderPokemons();
        }
    }

    showLoading() {
        this.container.innerHTML = '<div class="loading">Cargando Pokémon...</div>';
    }
}

// Inicializar la Pokédex cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new Pokedex();
});