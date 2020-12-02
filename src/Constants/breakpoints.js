const size = {
    celMin: '320px',
    celMax:'420px',
    tablet:'421px',
    comp:'1200px',
}

const device = {
    cel: `(min-width: ${size.celMin}) and (max-width: ${size.celMax})`,
    tablet: `(min-width: ${size.tablet})`,
    comp: `(min-width: ${size.comp})`
}

export default {size, device}

// constantes usada para deixar o site responsivo